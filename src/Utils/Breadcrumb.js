import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Breadcrumb() {
    const location = useLocation();
    const paths = location.pathname.split('/').filter(path => path);

    const pathNames = {
        'exam': 'Bài thi',
        'vocabulary': 'Từ vựng',
        'grammar': 'Ngữ pháp',
        'topic':"Chủ đề từ vựng",
        "paragraph":"Đoạn văn",
        "home":" ",
        "admin":"Quản lý",
        "product":"Sản phẩm"
    };

    return (
        <div className="card px-5 mb-1 py-3">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/admin">Home</Link>
                    </li>
                    {paths.map((path, index) => {
                        const routeTo = `/${paths.slice(0, index + 1).join('/')}`;
                        const isLast = index === paths.length - 1;

                        const displayName = pathNames[path] || path;

                        return isLast ? (
                            <li className="breadcrumb-item active" aria-current="page" key={index}>
                                {displayName}
                            </li>
                        ) : (
                            <li className="breadcrumb-item" key={index}>
                                <Link to={routeTo}>{displayName}</Link>
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </div>
    );
}

export default Breadcrumb;
