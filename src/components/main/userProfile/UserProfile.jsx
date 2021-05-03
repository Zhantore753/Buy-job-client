import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFeedbacks, getSelectedUser, getUserOrders } from '../../../actions/user';
import { setFeedbacks, setSelectedUser, setUserOrders } from '../../../reducers/userReducer';
import { API_URL } from '../../../config';
import avatarLogo from '../../../img/avatarlogo.svg';
import ProfileRating from './ProfileRating';
import ProfileFeedbacks from './ProfileFeedbacks';
import UserOrdersList from './UserOrdersList';

const UserProfile = () => {
    const currentUser = useSelector(state => state.user.currentUser);
    const selectedUser = useSelector(state => state.user.selectedUser);
    const selectedUserId = useSelector(state => state.user.selectedUserId);
    const [stars, setStars] = useState(-1);
    const dispatch = useDispatch();

    const avatar = selectedUser.avatar ? `${API_URL +  selectedUser.avatar}` : avatarLogo;

    const hasFetchedData = useRef(false);
    const feedbacks = useSelector(state => state.user.feedbacks);
    const orders = useSelector(state => state.user.orders);
    
    useEffect(() => {
        hasFetchedData.current = false;
        dispatch(setFeedbacks([]));
        dispatch(setUserOrders([]));
        setSelectedUser({});
        if(selectedUserId){
            dispatch(getSelectedUser(selectedUserId));
        }else{
            dispatch(getSelectedUser(currentUser.id));
        }
    }, [selectedUserId]);

    useEffect(() => {
        setStars(-1);
        setStars(selectedUser.rating);
        if(!hasFetchedData.current && feedbacks.length < selectedUser.ratingCount){
            dispatch(getFeedbacks(selectedUser.id));
            dispatch(getUserOrders(selectedUser.id));
            hasFetchedData.current = true;
        }
    }, [selectedUser]);

    return (
        <section className="executor main">
            <div className="container">
                <div className="executor__inner">
                    <div className="executor__rating">
                        <div className="executor__rating-name">
                            <img className="order__detail-avatar" src={avatar} alt="executor__avatar" />
                            <p>{selectedUser.fullName ? selectedUser.fullName : selectedUser.email}</p>
                        </div>
                        {selectedUser && selectedUser.rating && stars >= 0 &&
                            <ProfileRating stars={stars}/>
                        }
                        {feedbacks && feedbacks.length > 0 && stars >= 0  ?
                            <ProfileFeedbacks stars={stars}/>
                        :
                            <p>У данного пользователя еще нет отзывов</p>
                        }
                    </div>
                    <div className="executor__history">
                        <h1 className="executor__history-title">История заказов</h1>
                        {orders && orders.length > 0 ?
                            <UserOrdersList />
                        :
                            <p>У данного пользователя еще нет заказов</p>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserProfile;