import { Theme } from "@material-ui/core"
import { Palette } from "@material-ui/core/styles/createPalette"

interface CustomPalete extends Palette {
    black: string
    white: string
    icon: string
    divider: string
}

export interface CustomTheme extends Theme {
    palette: CustomPalete
}
