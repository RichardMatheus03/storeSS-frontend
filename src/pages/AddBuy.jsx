import CardRegister from "../components/AddBuy/CardRegister";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import tailwindConfig from "../../tailwind.config";

export default function AddBuy() {

    const theme = createTheme({
        palette: {
            primary: {
                main: tailwindConfig.theme.extend.colors.primary[200]
            }
        }
    })


    return (
        <div id="add-buy" className="tw-bg-gray-100 tw-w-screen tw-h-screen tw-overflow-hidden tw-flex sm:tw-p-8">

            <ThemeProvider theme={theme}>

                <CardRegister />

            </ThemeProvider>

        </div>
    );
}
