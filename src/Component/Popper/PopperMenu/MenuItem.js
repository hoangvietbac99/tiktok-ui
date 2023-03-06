// import styles from './Menu.module.scss';
// import classNames from 'classnames/bind';
// const cx = classNames.bind(styles);
function MenuItem({ data }) {
    return <button>{JSON.stringify(data)}</button>;
}

export default MenuItem;
