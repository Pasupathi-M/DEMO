/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */


import { TextField, TextFieldProps }from '@mui/material'
import { styled } from '@mui/system'
// ************* Types 
import { TNestedObj } from '../../../types/global.types.ts'
import { FC } from 'react'

export const TextField_v1 = styled(TextField)(({ }: TNestedObj) => ({
    borderRadius: 0,
    width: '100%',
}))


// interface ITextfieldProps extends  ReturnType<typeof TextField> {}
// export const Textfield = styled(TextField)(({ }: TNestedObj) => ({
//     borderRadius: 0,
//     width: '100%',
//     color: "white",
//     height: 10
// }))

interface ITextFieldProps extends TextFieldProps {}
export const Textfield: FC<ITextFieldProps> = (props: ITextFieldProps) => {
    return <TextField 
    sx={{
        borderRadius: 20
    }}
    size='small'
    InputLabelProps={{
        shrink: true
    }}
    label= "hello 345"
    variant={ props?.variant || 'outlined'}
    {...props} 
    />
}

