/**
 * @file 配置文件
 * @author lufangpu
 * @date 2018-09-13
 */
let serviceList = [
  {
    service: 'http://192.168.1.103:8088/'
  },
  {
    service: 'http://122.114.110.171:8088/'
  },
  {
    service: 'http://122.114.110.171:8086/'
  }
]
let serviceIndex = 1
let service = serviceList[serviceIndex].service
let APIS = {
  'userLogin': serviceList[2].service + '/authSystem/login/'
}
export { APIS, service }
