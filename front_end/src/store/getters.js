const getters = {
  //user
  token: state => state.user.token,
  userId: state => state.user.userId,
  userInfo: state => state.user.userInfo,
  userBlogList: state=>state.user.userBlogList,
  userCommentList:state=>state.user.userCommentList,
  //admin
  userList:state => state.admin.userList,
  addUserModalVisible: state => state.admin.addUserModalVisible,
  addUserParams: state => state.admin.addUserParams,
  editUserModalVisible:state => state.admin.editUserModalVisible,
  currentUserInfo:state => state.admin.currentUserInfo,
  articleList:state => state.admin.articleList
  }
  
  export default getters