import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";

import { useStore } from "../../../stores/store";


export default observer( function ActivityList() {

    const {activityStore} = useStore();
    const {deleteActivity, activityByDate, loading} = activityStore;
     
    const [target, setTarget] = useState('');

    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
            setTarget(e.currentTarget.name);
            deleteActivity(id);
    }

    
    
    return ( 

        <Segment>
            <Item.Group divided>
                {activityByDate.map(activity => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div>
                                {activity.description}
                                </div>
                                <div>
                                    {activity.city}, {activity.venue}
                                </div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => activityStore.selectActivity(activity.id)} floated='right' content='view' color='blue'/>
                                <Button loading={loading && target === activity.id}
                                    name={activity.id} 
                                    onClick={(e) => handleActivityDelete(e, activity.id)} 
                                    floated='right' 
                                    content='delete' 
                                    color='red'/>
                                <Label basic content={activity.category}></Label>
                            </Item.Extra>

                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    );
})