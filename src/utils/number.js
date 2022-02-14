const AMOUNT_PRECISION = 2
const PRICE_PRECISION = 6
const QUANTITY_PRECISION = 6
const PERCENT_PRECISION = 2
const TEN_THOUSAND_PRECISION = 6

function defaultNumber(num, defaultValue = null) {
  return num == null ? defaultValue : num
}

function precision(num, fixed) {
  if (num === 0) {
    return 0
  } if (typeof num !== 'number' || typeof fixed !== 'number') {
    return num
  }
  if (!num || !Number.isFinite(num)) {
    return null
  }
  return Math.round((num * 10 ** (fixed + 1)) / 10) / 10 ** fixed
}

/**
 *
 * @param {*} num
 * @param {*} fixed
 */
function fixedNumber(num, fixed) {
  return precision(num, fixed)
}

function fixedQuantity(v) {
  return precision(v, QUANTITY_PRECISION)
}

function fixedAmount(v) {
  return precision(v, AMOUNT_PRECISION)
}

function fixedPercent(v) {
  return precision(v, PERCENT_PRECISION)
}

function fixedPrice(v) {
  return precision(v, PRICE_PRECISION)
}

function fixedTenThousand(v) {
  return precision(v, TEN_THOUSAND_PRECISION)
}

function thousands(num) {
  const str = num.toString()
  const reg = str.indexOf('.') > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g
  return str.replace(reg, '$1,')
}

export default {
  defaultNumber,
  precision,
  fixedNumber,
  fixedQuantity,
  fixedAmount,
  fixedPercent,
  fixedTenThousand,
  fixedPrice,
  thousands
}
