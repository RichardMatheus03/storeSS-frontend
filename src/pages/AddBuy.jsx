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
        <div id="add-buy" className="tw-bg-gray-100 tw-w-full tw-h-full tw-overflow-hidden tw-flex sm:tw-p-8 tw-gap-8">

            <ThemeProvider theme={theme}>

                <CardRegister />

                <div className="tw-bg-white tw-shadow-md tw-rounded-r-md tw-p-8 tw-flex tw-flex-col tw-gap-4 tw-text-wrap tw-w-max">

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex distinctio at error expedita, nihil officiis maxime aperiam, doloremque quaerat ipsam delectus recusandae nostrum dicta dignissimos! Facilis vero deserunt adipisci quod.

                </div>

            </ThemeProvider>

        </div>
    );
}
