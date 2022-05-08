import React from 'react';
import {Placemark} from "react-yandex-maps";
import 'moment/locale/ru';
import moment from "moment";

const balloonContentHeader = ({post}) => {
    return (
        `
            <React.Fragment>
                <a href='/posts/${post.id}'>${post.species} ${'по кличке ' + post?.name}</a><br/>
            </React.Fragment>
        `
    )
}

const balloonContentBody = ({post}) => {
    const date = moment(post.eventDate).format('MMMM Do YYYY');
    return (
        `
            <React.Fragment>
                <a href = "/posts/${post.id}">
                <img height="auto" width="100%" src=${post.links?.[2]?.href} alt=${post.breed} loading="lazy"/>
                </a><br/>
                <span><strong>Статус:</strong> ${post.status} (${date})</span><br/>
                <span><strong>Описание:</strong> ${post.description}</span><br/>
                <span>${post.user.name}: ${post.user.mobileNumber}, ${post.user.email}</span>
            </React.Fragment>
        `
    )
}

function MarkItem({post}) {
    return (
        <div>
            <Placemark
                options={post.status === 'Потерян' &&{
                     iconColor: '#ea0000'
                }}
                properties={{
                balloonContentHeader: balloonContentHeader({post}),
                balloonContentBody: balloonContentBody({post})
            }}
                       modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                       key={post.id}
                       geometry={[post?.address?.y, post?.address?.x]}

            />
        </div>
    );
}

export default MarkItem;
