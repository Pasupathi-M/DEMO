/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState} from 'react'

// **************** Slice
import { TestAPIGelAll } from '../../redux/features/test/test'

// ************** Redux Hooks
import { useAppDispatch, useAppSelector } from '../../redux/hooks/redux.hooks'

export default function TestPageOne() {

    const dispatch = useAppDispatch()

    const [displayData, setDisplayData] = useState<any>(null)

    useEffect(() => {
        dispatch(TestAPIGelAll({}))
        const data = useAppSelector((state: any) => state?.testApi?.data)
        setDisplayData(data)
    }, [])
    return <>
    <h2>Show data</h2>
    {
        displayData && Array.isArray(displayData) ? (<>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
            {displayData.map((m) => <tr>
                <td>{m?.id}</td>
                <td>{m?.title}</td>
            </tr>)}
            </tbody>
        </table>
        
        </>):(<>
            <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>{displayData?.id}</td>
                <td>{displayData?.title}</td>
            </tr>
            </tbody>
        </table>
        </>)
    }
    </>
}