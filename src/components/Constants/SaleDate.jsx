import { SALE_SETTINGS } from './SaleSettings';

const { saleTitle, advertStart, saleStart, saleEnd, salePercentage } =
  SALE_SETTINGS;

const today = new Date();
const advertiseStart = new Date(advertStart);
const start = new Date(saleStart);
const end = new Date(saleEnd);
const saleOn = today > advertiseStart && today < end;

export { start, end, saleOn, salePercentage, saleTitle };
