/** @jsx jsx */
import { css, jsx } from '@emotion/core'
/////////////////////////////////////
///          CSS Styles           ///
/////////////////////////////////////

import '../App.css'
import { useState } from 'react'
import _ from 'lodash'
import Modal from 'antd/lib/modal'
import Button from 'antd/lib/button'

import 'antd/lib/button/style/index.css'
import 'antd/lib/modal/style/index.css'

const wrapper = css`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 100px 500px;
    grid-template-areas:
        '... helpfulinfo helpfulinfo...'
        'stuff stuff stuff stuff';
    background-color: #fff;
    color: #444;
    width: 100%;
    padding-left: 15px;
`

const helpfulinfo = css`
    padding: 20px;
    grid-area: helpfulinfo;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 100px;
    grid-template-areas: '... create clear...';
`
const create = css`
    padding: 20px;
    grid-area: create;
`
const clear = css`
    padding: 20px;
    grid-area: clear;
`
const stuff = css`
    padding: 20px;
    grid-area: stuff;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 500px;
    grid-template-areas: 'todo started helpneeded done';
    overflow: auto;
`
const todo = css`
    padding: 20px;
    grid-area: todo;
    border: black;
    border-style: dotted;
    text-align: center;
    font-size: 25px;
`
const started = css`
    padding: 20px;
    grid-area: started;
    border: black;
    border-style: dotted;
    text-align: center;
    font-size: 25px;
`
const helpneeded = css`
    padding: 20px;
    grid-area: helpneeded;
    border: black;
    border-style: dotted;
    text-align: center;
    font-size: 25px;
`
const done = css`
    padding: 20px;
    grid-area: done;
    border: black;
    border-style: dotted;
    text-align: center;
    font-size: 25px;
`
const modalGrid = css`
    display: grid;
    grid-template-columns: 30% 70%;
    grid-template-rows: 50px 50px;
    grid-template-areas:
        'nameLabel nameInput'
        'descLabel descInput';
    background-color: #fff;
    color: #444;
    width: 100%;
    padding-left: 15px;
`

const nameLabel = css`
    padding: 20px;
    grid-area: nameLabel;
    text-align: right;
`

const nameInput = css`
    padding: 20px;
    grid-area: nameInput;
`
const descLabel = css`
    padding: 20px;
    grid-area: descLabel;
    text-align: right;
`
const descInput = css`
    padding: 20px;
    grid-area: descInput;
`
const options = ['todo', 'started', 'helpneeded', 'done']
const WhatsThePlan = () => {
    const [listState, setListState] = useState(
        JSON.parse(localStorage.getItem('list')) || []
    )
    const moveAlong = (forward: boolean, e: any) => {
        let a = [...listState]
        const index = _.findIndex(listState, { name: e.target.id })

        if (index !== -1) {
            const item = a[index]
            const indexOfList = options.indexOf(item.status)
            const newStatus = forward
                ? options[indexOfList + 1]
                : options[indexOfList - 1]
            a[index] = { ...item, status: newStatus }
        }

        localStorage.setItem('list', JSON.stringify(a))
        setListState(a)
    }
    const closeTask = (e: any) => {
        let a = [...listState]
        const index = _.findIndex(listState, { name: e.target.id })

        if (index !== -1) {
            a.splice(index, 1)
        }

        localStorage.setItem('list', JSON.stringify(a))
        setListState(a)
    }
    const produceList = (items: any) => {
        var a = items
            ? items.map((rating: any, idx: number) => {
                  return (
                      <div
                          key={idx}
                          style={{
                              border: 'black',
                              borderColor: 'black',
                              borderStyle: 'solid',
                              width: '187px',
                              paddingBottom: '20px',
                              borderRadius: '25px',
                              textAlign: 'center',
                              margin: 'auto',
                              marginTop: '10px',
                              marginBottom: '10px',
                          }}
                      >
                          <h3>{rating.name}</h3>
                          <h5>{rating.desc}</h5>
                          {rating.status !== 'done' && (
                              <Button
                                  type="primary"
                                  onClick={_.partial(moveAlong, true)}
                                  id={rating.name}
                              >
                                  Move Along
                              </Button>
                          )}
                          {rating.status !== 'todo' && (
                              <Button
                                  type="primary"
                                  style={{
                                      backgroundColor: 'red',
                                      paddingTop: '5px',
                                  }}
                                  onClick={_.partial(moveAlong, false)}
                                  id={rating.name}
                              >
                                  Move Back
                              </Button>
                          )}
                          {rating.status == 'done' && (
                              <Button
                                  type="primary"
                                  style={{
                                      backgroundColor: 'red',
                                      paddingTop: '5px',
                                  }}
                                  onClick={closeTask}
                                  id={rating.name}
                              >
                                  Remove
                              </Button>
                          )}
                      </div>
                  )
              })
            : null

        return a
    }
    const clearAll = () => {
        localStorage.setItem('list', JSON.stringify([]))
        setListState([])
    }
    const [isVisible, setIsVisible] = useState(false)
    const showModal = () => {
        setIsVisible(true)
    }

    const handleOk = () => {
        let a = [...listState]
        var name = (document.getElementById('listId') as HTMLInputElement).value
        var desc = (document.getElementById('desc') as HTMLInputElement).value
        a.push({ name: name, desc: desc, status: 'todo' })

        localStorage.setItem('list', JSON.stringify(a))
        setListState(a)
        setIsVisible(false)
    }

    const handleCancel = () => {
        setIsVisible(false)
    }

    return (
        <div css={wrapper}>
            <div css={helpfulinfo}>
                <div css={clear}>
                    <Button
                        type="danger"
                        onClick={clearAll}
                        style={{ paddingRight: '20px' }}
                    >
                        Clear All
                    </Button>
                </div>
                <div css={create}>
                    <Button type="primary" onClick={showModal}>
                        Create new
                    </Button>
                </div>
                <Modal
                    title="Add a new task"
                    visible={isVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <div css={modalGrid}>
                        <div css={nameLabel}>Name</div>
                        <div css={nameInput}>
                            <input
                                type="text"
                                id="listId"
                                placeholder="Task Name"
                            />
                        </div>

                        <div css={descLabel}>Description</div>
                        <div css={descInput}>
                            <input
                                type="text"
                                id="desc"
                                placeholder="Task Description"
                            />
                        </div>
                    </div>
                </Modal>
            </div>
            <div css={stuff}>
                <div css={todo}>
                    To Do
                    {produceList(
                        _.filter(listState, function(o: any) {
                            return o.status === 'todo'
                        })
                    )}
                </div>
                <div css={started}>
                    Started
                    {produceList(
                        _.filter(listState, function(o: any) {
                            return o.status === 'started'
                        })
                    )}
                </div>
                <div css={helpneeded}>
                    Help!!
                    {produceList(
                        _.filter(listState, function(o: any) {
                            return o.status === 'helpneeded'
                        })
                    )}
                </div>
                <div css={done}>
                    Done
                    {produceList(
                        _.filter(listState, function(o: any) {
                            return o.status === 'done'
                        })
                    )}
                </div>
            </div>
        </div>
    )
}

export default WhatsThePlan
