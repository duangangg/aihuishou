const defaultState = {
    bannerImg:[],
    baokuan:'',
    doubleImg:[],
    moreImg:'',
    changeNew:'',
    imgItem:[],
    goodsActive:'',
    context:[],
    newBuy:'',
    threeImg:'',
    liucheng:'',
    notice:'',
}

export default (state = defaultState,action) => {
    if(action.type==='LUNBOTU'){
        let newState=Object.assign({},state);
        newState.bannerImg = action.list;
        newState.baokuan = action.list2;
        newState.doubleImg=action.list3;
        newState.moreImg=action.list4;
        newState.changeNew=action.list5;
        newState.imgItem=action.list6;
        newState.goodsActive=action.list7;
        newState.context=action.list8;
        newState.newBuy=action.list9;
        newState.threeImg=action.list10;
        newState.liucheng=action.list11;
        newState.notice=action.list12;
        return newState;
    }
    return state
}