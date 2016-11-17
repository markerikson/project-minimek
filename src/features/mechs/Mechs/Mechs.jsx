import React from "react";

import {
    Grid,
    Table,
    Segment,
    Header,
    Form,
} from "semantic-ui-react";

const Mechs = () => {


    return (
        <Segment>
            <Grid>
                <Grid.Column width={10}>
                    <Header as="h3">Mechs List</Header>
                    <Table celled>

                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell width={1}>
                                    ID
                                </Table.HeaderCell>
                                <Table.HeaderCell width={5}>
                                    Name
                                </Table.HeaderCell>
                                <Table.HeaderCell width={3}>
                                    Model
                                </Table.HeaderCell>
                                <Table.HeaderCell width={3}>
                                    Weight (tons)
                                </Table.HeaderCell>
                                <Table.HeaderCell width={2}>
                                    Class
                                </Table.HeaderCell>

                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                    1
                                </Table.Cell>
                                <Table.Cell>
                                    Warhammer
                                </Table.Cell>
                                <Table.Cell>
                                    WHM-6R
                                </Table.Cell>
                                <Table.Cell>
                                    70
                                </Table.Cell>
                                <Table.Cell>
                                    Heavy
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>

                    </Table>
                </Grid.Column>
                <Grid.Column width={6}>
                    <Header as="h3">Mech Details</Header>
                    <Segment >
                        <Form size="large">
                            <Form.Field name="id" width={6} >
                                <label>ID</label>
                                <input
                                    placeholder="ID"
                                    value="1"
                                />
                            </Form.Field>
                            <Form.Field name="name" width={16} >
                                <label>Name</label>
                                <input
                                    placeholder="Name"
                                    value="Warhammer"
                                />
                            </Form.Field>
                            <Form.Field name="model" width={6} >
                                <label>Model</label>
                                <input
                                    placeholder="Model"
                                    value="WHM-6R"
                                />
                            </Form.Field>
                            <Form.Field name="weight" width={6} >
                                <label>Weight</label>
                                <input
                                    value="70"
                                />
                            </Form.Field>
                            <Form.Field name="class" width={6} >
                                <label>Class</label>
                                <input
                                    value="Heavy"
                                />
                            </Form.Field>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        </Segment>
    )
}
export default Mechs;