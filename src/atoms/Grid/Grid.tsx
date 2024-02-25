import { ScrollView, StyleSheet, View } from "react-native";

export function Grid ({ width, cols, gap, data, element } : PropTypes.Grid) {

    const styles = createStyles({ width, cols, gap })
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                {data.map((item, i) => (
                    <View style={styles.item} key={i}>
                        {element(item)}
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}

type CreateStylesProps = {
    width: number,
    cols: number,
    gap: number | undefined
}

const createStyles = ({ width, cols, gap } : CreateStylesProps) => {
    return StyleSheet.create({
        scrollView: {
            // height: 1000
        },
        container: {
            flexDirection: 'column',
            flexWrap: 'wrap',
            gap: gap ?? 0,
            width: width,
            height: 1000
        },
        item: {
            width: gap ? ((width / cols) - (gap * (cols - 1))) : (width / cols),
        }
    })
}