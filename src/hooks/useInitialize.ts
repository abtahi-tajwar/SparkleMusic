import * as MediaLibrary from 'expo-media-library';
import React, { useEffect } from 'react'
import { updateMediaPermisson } from '../redux/slices/permission';
import { useAppDispatch } from '../redux/hooks';

const useInitialize = () => {
    const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
    const dispatch = useAppDispatch();

    const initializePermission = (_permissionResponse : Store.PermissionResponse) => {
        dispatch(updateMediaPermisson(_permissionResponse))
    }

    const askPermission = (_permissionResponse : Store.PermissionResponse) => {
        return new Promise (async (resolve, reject) => {
            try {
                if (!_permissionResponse.granted && _permissionResponse.canAskAgain) {
                    const data = await requestPermission();
                    resolve(data);
                } 
            } catch (error) {
                reject(error)
            }
            
        })
    }

    useEffect(() => {
        if (permissionResponse) {
            if (permissionResponse.granted) {
                initializePermission(permissionResponse)
            } else {
                askPermission(permissionResponse).then(res => {
                    initializePermission(res as Store.PermissionResponse);
                });
            }
        }
        
    }, [permissionResponse])

    
  return
}

export default useInitialize