namespace Store {
    type Permission = {
        media: PermissionResponse
    }
    type PermissionResponse = {
        canAskAgain: boolean, 
        expires: ("never" | number), 
        granted: boolean, 
        status: ("denied" | "granted" | "undetermined")
    }
}