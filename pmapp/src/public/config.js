/**
 * @file 配置文件
 * @author lufangpu
 * @date 2018-09-13
 */
let serviceList = [
  {
    service: 'http://192.168.1.134:8080/xweb'
  },
  {
    service: 'http://122.114.110.171:8080/xweb'
  }
]
let serviceIndex = 0
let service = serviceList [servieIndex].service
let APIS = {
  'userLogin': service + '/api/user/userLogin'
}
export { APIS, service }
