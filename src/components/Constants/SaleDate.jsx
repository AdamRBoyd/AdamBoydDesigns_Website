import { Settings } from '../json';

const { saleTitle, advertStart, saleStart, saleEnd, salePercentage } =
  Settings.sale;

const today = new Date();
const advertiseStart = new Date(advertStart);
const start = new Date(saleStart);
const end = new Date(saleEnd);
const saleOn = today > advertiseStart && today < end;

export { start, end, saleOn, salePercentage, saleTitle };
