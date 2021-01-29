import request from '../utils/request'

const url = 'http://110.187.88.70:21605'
export function getInfo(token) {
    return request({
        url: '/vue-admin-template/user/info',
        method: 'get',
        params: { token }
    })
}
       
    // get

//获取菜单列表
export function getMenuList() {
    return request({
        url: url + '/system/menu',
        method: 'get'
    })
}
//获取用户账号列表
export function getAccountList(currentPage, pageSize, tel, name) {
    return request({
        url: url + '/system/user',
        method: 'get',
        params: { currentPage, pageSize, tel, name }
    })
}
//通过id查找用户账号
export function findUser(uId) {
    return request({
        url: url + '/system/user/findUser',
        method: 'get',
        params: { uId }
    })
}
//获取字典列表
export function getDictList(currentPage, pageSize, dictName, dictType, status) {
    return request({
        url: url + '/system/dict/type',
        method: 'get',
        params: { currentPage, pageSize, dictName, dictType, status }
    })
}
//获取字典类型列表
export function getDictLTypeList(dictId, dictLabel, statu) {
    return request({
        url: url + '/system/dict/data',
        method: 'get',
        params: { dictId, dictLabel, statu }
    })
}
//获取字典类型值
export function getDictLType(dictType) {
    return request({
        url: url + '/system/dict/data/findByDictType',
        method: 'get',
        params: { dictType }
    })
}
//获取老人列表
export function getPaging(currentPage, pageSize) {
    return request({
        url: url + '/elder',
        method: 'get',
        params: { currentPage, pageSize }
    })
}
//通过id查找老人
export function getfindById(elderId) {
    return request({
        url: url + '/elder/findById',
        method: 'get',
        params: { elderId }
    })
}
//获取房间列表
export function getRoomList(currentPage, pageSize, type, name, location) {
    return request({
        url: url + '/room',
        method: 'get',
        params: { currentPage, pageSize, type, name, location }
    })
}
//搜索房间
export function searchRoom(roomId) {
    return request({
        url: url + '/room/findByRoomId',
        method: 'get',
        params: { roomId }
    })
}
//获取未分配老人
export function getUndistributed() {
    return request({
        url: url + '/elder/willAllocateToBed',
        method: 'get',
        params: {}
    })
}
//绑定老人与床位
export function bindingBed(elderId) {
    return request({
        url: url + '/bed/bindElder',
        method: 'get',
        params: { elderId }
    })
}
//解绑老人
export function untieElder(elderIds) {
    return request({
        url: url + '/bed/unBindElder',
        method: 'get',
        params: { elderIds }
    })
}


//获取区域列表
export function getArea(currentPage, pageSize, name) {
    return request({
        url: url + '/region',
        method: 'get',
        params: { currentPage, pageSize, name }
    })
}

//通过id查找区域
export function getDistrict(regionId) {
    return request({
        url: url + '/region/findById',
        method: 'get',
        params: { regionId }
    })
}
//获取未分配床位的区域
export function getDistribution() {
    return request({
        url: url + '/bed/willAllocateToRegion',
        method: 'get',
        params: {}
    })
}
//获取ID搜索未分配的床位
export function getsearchDistribution(searchContent) {
    return request({
        url: url + '/bed/willAllocateToRegion',
        method: 'get',
        params: { searchContent }
    })
}

//获取员工列表
export function getStaff(currentPage, pageSize) {
    return request({
        url: url + '/employee',
        method: 'get',
        params: { currentPage, pageSize }
    })
}

//获取房态图
export function getOffLineBeds(currentPage, pageSize, regionId) {
    return request({
        url: url + '/bed/showOffLineBeds',
        method: 'get',
        params: { currentPage, pageSize, regionId }
    })
}

//获取服务内容列表
export function getServe() {
    return request({
        url: url + '/serviceContent',
        method: 'get',
        params: {}
    })
}

//通过id查找服务内容
export function getServices(id) {
    return request({
        url: url + '/serviceContent',
        method: 'get',
        params: { id }
    })
}

//绑定员工卡号
export function getBindCardNum(employeeId, cardNum) {
    return request({
        url: url + '/employee/bindCardNum',
        method: 'get',
        params: { employeeId, cardNum }
    })
}
//通过id查找员工
export function getemployee(id) {
    return request({
        url: url + '/employee/findById',
        method: 'get',
        params: { id }
    })
}












// POST

// export function login(data) {
//     return request({
//         url: url + '/user/login',
//         method: 'post',
//         data
//     })
// }

//用户登录
export function login(userName, password) {
    return request({
        url: url + '/system/user/login',
        method: 'post',
        data: { userName, password },
    })
}

export function logout() {
    return request({
        url: '/vue-admin-template/user/logout',
        method: 'post'
    })
}
//  添加菜单  "parentId":1, //父级菜单id,没有父级菜单传0
export function addMemu(name, parentId, sort) {
    return request({
        url: url + '/system/menu',
        method: 'post',
        data: { name, parentId, sort }
    })
}
//  添加账号 "parentId":1, //父级菜单id,没有父级菜单传0
export function addAccount(name, tel, password, status, remark, menuAuth) {
    return request({
        url: url + '/system/user',
        method: 'post',
        data: { name, tel, password, status, remark, menuAuth }

    })
}
//  添加字典
export function addDict(dictName, dictType, status, remark) {
    return request({
        url: url + '/system/dict/type',
        method: 'post',
        data: { dictName, dictType, status, remark }

    })
}
//  添加字典类型
export function addDictType(dictSort, dictLabel, dictValue, dictId, status, remark) {
    return request({
        url: url + '/system/dict/data',
        method: 'post',
        data: { dictSort, dictLabel, dictValue, dictId, status, remark }

    })
}

//添加老人
export function renewal(name, sex, status, birthday, idCard, address, phone, nursingGrade, admissionTime, occupancyAssess, liveAssess, continuousAssess, contacts) {
    return request({
        url: url + '/elder',
        method: 'post',
        data: { name, sex, status, birthday, idCard, address, phone, nursingGrade, admissionTime, occupancyAssess, liveAssess, continuousAssess, contacts }
    })
}


//添加房间
export function addRoom(name, location, type, beds) {
    return request({
        url: url + '/room',
        method: 'post',
        data: { name, location, type, beds }
    })
}
//添加区域
export function addArea(name, tours, beds) {
    return request({
        url: url + '/region',
        method: 'post',
        data: { name, tours, beds }
    })
}
//员工头像上传
export function addPictures(file) {
    return request({
        url: url + '/employee/upAvatar',
        method: 'post',
        data: { file },


    })
}
//新增员工
export function addStaff(name, avatar, idCard, sex, tel, address, position, emergencyContact, contactTel, entryTime, certificate) {
    return request({
        url: url + '/employee',
        method: 'post',
        data: { name, avatar, idCard, sex, tel, address, position, emergencyContact, contactTel, entryTime, certificate }
    })
}

//新增服务内容
export function addServe(name, parentId, sort) {
    return request({
        url: url + '/serviceContent',
        method: 'post',
        data: { name, parentId, sort },
    })
}





// PUT

//修改用户
export function amendAccount(id, name, tel, status, remark, menuAuth) {
    return request({
        url: url + '/system/user', method: 'put',
        data: { id, name, tel, status, remark, menuAuth }
    })
}

// 更新老人信息
export function renew() {
    return request({
        url: url + '/elder',
        method: 'put',
        data: ''
    })
}

//更新房间
//添加房间
export function updateRoom(id, name, location, type, beds) {
    return request({
        url: url + '/room',
        method: 'put',
        data: { id, name, location, type, beds }
    })
}
//更新区域
export function updatArea(id, name, tours, beds) {
    return request({
        url: url + '/region',
        method: 'put',
        data: { id, name, tours, beds }
    })
}
//修改员工
export function updaStaff(id, name, avatar, idCard, sex, tel, address, position, emergencyContact, contactTel, entryTime, certificate) {
    return request({
        url: url + '/employee',
        method: 'put',
        data: { id, name, avatar, idCard, sex, tel, address, position, emergencyContact, contactTel, entryTime, certificate }
    })
}

//更新服务内容
export function updatserviceContent(id, name, parentId, sort) {
    return request({
        url: url + '/serviceContent',
        method: 'put',
        data: { id, name, parentId, sort }
    })
}

//编辑老人
export function updaterenewal(id, name, sex, status, birthday, idCard, address, phone, nursingGrade, admissionTime, occupancyAssess, liveAssess, continuousAssess, contacts) {
    return request({
        url: url + '/elder',
        method: 'put',
        data: { id, name, sex, status, birthday, idCard, address, phone, nursingGrade, admissionTime, occupancyAssess, liveAssess, continuousAssess, contacts }
    })
}







//删除 delAccount
//删除系统账号
export function delAccount(ids) {
    return request({
        url: url + '/system/user',
        method: 'delete',
        params: { ids }
    })
}

//删除老人
export function delElderId(elderIds) {
    return request({
        url: url + '/elder',
        method: 'delete',
        params: { elderIds }
    })
}

//删除房间
export function delRoom(roomIds) {
    return request({
        url: url + '/room',
        method: 'delete',
        params: { roomIds }
    })
}
//删除区域
export function delArea(regionIds) {
    return request({
        url: url + '/region',
        method: 'delete',
        params: { regionIds }
    })
}
//删除员工
export function delStaff(ids) {
    return request({
        url: url + '/employee',
        method: 'delete',
        params: { ids }
    })
}
//删除服务
export function delSserviceContent(id) {
    return request({
        url: url + '/serviceContent',
        method: 'delete',
        params: { id }
    })
}