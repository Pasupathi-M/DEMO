import moment from "moment"

import { API_DATE_FORMAT } from '../data/AppConst'

export const currentDate = (format: string = API_DATE_FORMAT[5])=>  new Date(moment(new Date()).utcOffset("+5:30").format(format))