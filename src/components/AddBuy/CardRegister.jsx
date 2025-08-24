import { useState } from "react";

import SelectBasic from "../SelectBasic/SelectBasic";

import { OutlinedInput, InputAdornment, TextField } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/pt-br'
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import PaymentIcon from '@mui/icons-material/Payment';


export default function CardRegister() {

    const [selectedDate, setSelectedDate] = useState(null);


    return (

        <div className="tw-bg-white tw-shadow-md tw-rounded-r-md tw-p-8 tw-flex tw-flex-col tw-gap-4">

            <div className="tw-flex tw-items-center tw-justify-between">
                <span className="tw-text-md tw-font-semibold tw-text-primary-200">Cadastrar gasto</span>
                <button className="tw-bg-primary-200 tw-p-2 tw-rounded-md tw-shadow-md tw-text-white tw-font-semibold hover:tw-bg-primary-300">
                    <PaymentIcon className="tw-mr-2" />
                    Adicionar
                </button>
            </div>

            <div>
                <span className="tw-text-md tw-font-semibold">Categoria</span>
                <div className="tw-mt-2">
                    <SelectBasic options={["Sem categoria", "Parcela", "À Vista", "Cartão de Crédito"]}></SelectBasic>
                </div>
            </div>

            <div>
                <span className="tw-text-md tw-font-semibold">Valor</span>
                <div className="tw-mt-2">
                    <OutlinedInput
                        type='number'
                        sx={{ paddingRight: 1.2, width: '100%' }}
                        endAdornment={
                            <InputAdornment position="end">
                                <PaymentIcon />
                            </InputAdornment>
                        }
                    />
                </div>
            </div>

            <div>

                <span className="tw-text-md tw-font-semibold">Data</span>
                <div className="tw-mt-2 tw-w-full">
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
                        <DatePicker 
                            sx={{ width: '100%' }} 
                            value={selectedDate} 
                            onChange={(newValue) => setSelectedDate(newValue)}
                            slotProps={{
                                field: {clearable:true}
                            }} 
                        />
                    </LocalizationProvider>
                </div>
                <div className="tw-flex tw-gap-2 tw-w-full tw-mt-2">
                    {["Ontem", "Hoje"].map((item, index) => (
                        <button 
                            key={index} 
                            onClick={() => index == 0 ? setSelectedDate(dayjs().subtract(1, 'day')) : setSelectedDate(dayjs())} 
                            className="tw-w-full tw-bg-gray-200 hover:tw-bg-primary-200 tw-rounded-lg tw-p-2"
                        >
                            {item}
                        </button>
                    ))}
                </div>

            </div>

            <div>
                <span className="tw-text-md tw-font-semibold">Descrição</span>
                <div className="tw-mt-2">
                    <OutlinedInput
                        type='text'
                        sx={{ paddingRight: 1.2, width: '100%' }}
                    />
                </div>
            </div>

            <div className="tw-w-full tw-mt-auto">

                <button className="tw-bg-primary-200 tw-p-2 tw-rounded-md tw-w-full tw-shadow-md tw-text-white tw-font-semibold hover:tw-bg-primary-300">
                    Adicionar
                </button>

            </div>



        </div>

    );
}
