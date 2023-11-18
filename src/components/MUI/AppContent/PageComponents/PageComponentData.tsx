import { lazy } from 'react'


// ******************** APP DATA
import { APP_ROUTES } from '../../../../data/AppRoutes.ts'

// ******************** Interface
import { IPageComponentArray } from '../../../../types/index'

// ************* lazy loading Components
import TestOne from '../../../../pages/Test/TestPage'
// const TestOne = lazy(() => import('../../../../pages/Test/TestPage').then(module => module.TestPageOne ))
const TestTwo = lazy(() => import('../../../../pages/Test/TestPage2'))
const TestThree = lazy(() => import('../../../../pages/Test/TestPage3'))
const TestFour = lazy(() => import('../../../../pages/Test/TestPage4'))


export const PageComponentArray: IPageComponentArray[] = [
    {
        path: APP_ROUTES?.TEST1?.pathName,
        element: <TestOne />,
        isLazy: true
    },
    {
        path: APP_ROUTES?.TEST2.pathName,
        element: <TestTwo />,
        isLazy: true
    },
    {
        path: APP_ROUTES?.TEST3?.pathName,
        element: <TestThree />,
        isLazy: true
    },
    {
        path: APP_ROUTES?.TEST4.pathName,
        element: <TestFour />,
        isLazy: true
    }
]

