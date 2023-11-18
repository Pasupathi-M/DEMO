/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */


import { TextField }from '@mui/material'
import { styled } from '@mui/system'
// ************* Types 
import { TNestedObj } from '../../../types/global.types.ts'

export const TextField_v1 = styled(TextField)(({ }: TNestedObj) => ({
    borderRadius: 0,
    width: '100%',
}))
