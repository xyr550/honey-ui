/**
 * 支持负数 0 正数   整数
 * @param {*} num
 */
export const checkNumberFun = (num) => {
  const reg = /^(-)?[0-9]\d*(\.\d+)?$/
  return reg.test(num)
}
/**
*
* @param {} port  要验证的端口
* @returns boolean
*/
export const CheckPortFun = (port) => {
  const reg = /^[1-9]\d*$/
  return reg.test(port) && 1 * port >= 1 && 1 * port <= 65535
}
/**
* 大于0 即可
* @param {*} port
*/
export const CheckNumGreaterThan0Fun = (num) => {
  const reg = /^[1-9]\d*(\.\d+)?$/
  return reg.test(num) && num > 0
}
/**
* 验证数字 大于 0
* @param {*} port
*/
export const CheckNumFun = (port) => {
  const reg = /^[1-9]\d*$/
  return reg.test(port) && 1 * port >= 1
}
/**
*
* @param {*} IPV6
* @returns boolean
*/
export const myselfCheckIsIPv6 = (IPV6) => {
  const ipV6Pattern = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/
  return IPV6 && ipV6Pattern.test(IPV6);
}

/**
*
* @param {} IPV4  要验证的IP
* @returns boolean
*/
export const myselfCheckIpFun = (IPV4) => {
  const reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
  return IPV4 && reg.test(IPV4)
}
/**
* 验证邮箱
* @param {*} str
* @returns boolean
*/
export const IsEmail = (str) => {
  const reg = /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/;
  return str && reg.test(str);
}
// 域名
export const checkDomainFun = (domain) => {
  // const reg = /^(?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/
  const reg = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/
  return domain && reg.test(domain)
}
// 身份证号
export const checkIDCardFun = (idCard) => {
  const reg = /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  return idCard && reg.test(idCard)
}
// 手机号
export const checkPhoneFun = (phone) => {
  const reg = /^[1][3,4,5,7,8,9][0-9]{9}$/
  return phone && reg.test(phone)
}
