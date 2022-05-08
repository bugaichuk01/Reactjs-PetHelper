import {useSelector} from "react-redux";

const isMyItem = (item) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {user} = useSelector(state => state.userReducer);
    return  user?.id === item?.user?.id
}

export default isMyItem;