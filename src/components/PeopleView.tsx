import * as React from "react";
import "./PeopleView.css";
import * as classNames from "classnames";
import {observer} from "mobx-react";

interface PeopleViewProps {
    title: string;
    subTitle: string;
    imgSrc: string;
    href: string;
    active: boolean;
    loading: boolean;
}

const PeopleView: React.SFC<Partial<PeopleViewProps>> = (props) => {
    const peopleViewClass = classNames({
        "people-view": true,
        "people-view--active": props.active,
        "people-view--loading": props.loading
    });

    return (
        <a href={props.href} target="_blank" className={peopleViewClass}>
            <img src={props.imgSrc} className="people-view__img" width={300} height={300}/>
            <section className="people-view__info">
                <h3 className="people-view__title">{props.title}</h3>
                <p className="people-view__subtitle">{props.subTitle}</p>
            </section>
        </a>
    );
};

export default observer(PeopleView);