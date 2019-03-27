import React from "react";
import ReactDOM from "react-dom";
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>                             
                <CommentDetail 
                    avatar= {faker.image.avatar()} 
                    author= {faker.name.firstName()}
                    comment= {faker.lorem.sentence()} 
                    date={faker.date.weekday()}
                />
            </ApprovalCard>
            <ApprovalCard> 
                <CommentDetail 
                    avatar= {faker.image.avatar()} 
                    author= {faker.name.firstName()}
                    comment= {faker.lorem.sentence()} 
                    date={faker.date.weekday()}
                />
            </ApprovalCard>
            <ApprovalCard>  
                <CommentDetail 
                    avatar= {faker.image.avatar()} 
                    author= {faker.name.firstName()}
                    comment= {faker.lorem.sentence()} 
                    date={faker.date.weekday()}
                />
            </ApprovalCard> 
        </div>
 
    );
};

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);