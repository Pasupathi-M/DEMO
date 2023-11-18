/* eslint-disable no-empty-pattern */
import { Button, Radio, RadioProps } from '@mui/material'
import { styled } from '@mui/system'
import { LoadingButton } from '@mui/lab'
import { FC } from 'react'


// eslint-disable-next-line no-empty-pattern
export const Button_v1 = styled(Button)(({ }) => ({
    width: '100%',
    borderRadius: 0,
    borderStyle: 'dashed',
}))

// eslint-disable-next-line no-empty-pattern
export const Button_v2 = styled(Button)(({}) => ({
    borderStyle : 'none',
    height: 'auto'
}))

export const Button_v3 = (props: any) => <Button variant='contained' {...props } /> 

export const LoadingButton_v1 = styled(LoadingButton)(({ }) => ({
    borderStyle: 'none',
    borderRadius: '0',
    width: '100%'
}))

interface IRadioProps extends RadioProps {}
export const RadioButton: FC<IRadioProps> = (props: IRadioProps) => <Radio {...props}/>

