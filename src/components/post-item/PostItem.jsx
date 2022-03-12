import styles from './PostItem.module.css';
import cn from 'classnames';
import moment from 'moment';

function PostItem({post}) {

    return (
        <li className={styles.list__item} key={post.id}>
            <img className={styles.list__img} src={post.photos ? post.photos : require('../../images/defaultPostImage.jpeg')} alt=""/>
            <div>
                <span className={styles.list__name}>{post.name}</span>
                <span
                    className={
                    post.status === 'lost'
                        ? cn(styles.list__status, styles.list__status_lost)
                        : cn(styles.list__status, styles.list__status_found)}>{post.status}</span>
            </div>
            <span className={styles.list__name}>{moment(post.Date).format('LT')}</span>
        </li>
    );
}

export default PostItem;