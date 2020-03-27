import Downshift, {
    GetItemPropsOptions, // eslint-disable-line no-unused-vars
    StateChangeOptions, // eslint-disable-line no-unused-vars
    DownshiftState, // eslint-disable-line no-unused-vars
} from 'downshift'
import './combobox.css'
import _ from 'lodash'
import React, { useState, useEffect } from 'React'

export interface ComboBoxItem {
    value: string | number
    displayName: string
}

interface ComboBoxProps<T> {
    data: Array<T>
    onItemSelected?: (selectedItem: T) => void
    uniqueIdentifier: (selectedItem: T) => string
    displayNameGetter: (item: T | number | string) => string
    formatter?: (item: T | number | string) => string
    icon?: string
    inputValue?: T | number | string
    placeHolderText?: string
    filter?: (
        item: T,
        inputValue: string,
        displayNameGetter: (item: T) => string
    ) => boolean
    grouped?: boolean
    disabled?: boolean
    onStateChange?: (
        changes: StateChangeOptions<T>,
        downshiftState?: DownshiftState<T>
    ) => void
    selectedItem?: T
}

function ListItem<T>(
    itemIndex: number,
    getItemProps: (options: GetItemPropsOptions<T>) => any,
    item: T,
    index: number,
    highlightedIndex: number,
    selectedItem: T,
    displayNameGetter: (item: T | number | string) => string
) {
    return (
        <li
            key={itemIndex}
            {...getItemProps({
                item: item,
                index: index,
                style: {
                    backgroundColor:
                        highlightedIndex === index ? '#0081c2' : 'white',
                    fontWeight: selectedItem === item ? 'bold' : 'normal',
                    padding: '3px 7px 4px',
                },
            })}
        >
            {displayNameGetter(item)}
            {(item as any).asideText ? (
                <span className="combobox-list-aside-text">
                    {(item as any).asideText}
                </span>
            ) : null}
        </li>
    )
}

function renderSingleItems<T>(
    data: T[],
    filter: (
        item: T,
        inputValue: string,
        displayNameGetter: (item: T) => string
    ) => boolean,
    inputValue: string,
    displayNameGetter: (item: T | number | string) => string,
    getItemProps: (options: GetItemPropsOptions<T>) => any,
    highlightedIndex: number,
    selectedItem: T
) {
    return data
        .filter((item: T) => filter(item, inputValue, displayNameGetter))
        .map((item: T, index: number) =>
            ListItem(
                index,
                getItemProps,
                item,
                index,
                highlightedIndex,
                selectedItem,
                displayNameGetter
            )
        )
}

function DownShiftComboBox<T>({
    data,
    uniqueIdentifier,
    displayNameGetter,
    formatter = (data: T | number | string) => displayNameGetter(data),
    icon = 'fa fa-list-ul',
    inputValue = null,
    placeHolderText,
    filter = (
        item: T,
        inputValue: string,
        displayNameGetter: (item: T) => string
    ) =>
        !inputValue ||
        displayNameGetter(item)
            .toUpperCase()
            .includes(inputValue.toUpperCase()),
    disabled = false,
    onStateChange,
    selectedItem,
}: ComboBoxProps<T>) {
    let initialItem: T = selectedItem
    let textInput = React.createRef<HTMLInputElement>()

    if (inputValue && !initialItem) {
        initialItem = _.find(
            data,
            (item: T) =>
                uniqueIdentifier(item) ===
                (typeof inputValue === 'object'
                    ? uniqueIdentifier(inputValue)
                    : inputValue)
        )
    }

    return (
        <div>
            <Downshift
                itemToString={uniqueIdentifier}
                onStateChange={onStateChange}
            >
                {({
                    getInputProps,
                    getMenuProps,
                    getItemProps,
                    isOpen,
                    inputValue,
                    selectedItem,
                    highlightedIndex,
                    toggleMenu,
                }) => {
                    let selectionTextClass: 'selection-text'

                    selectedItem = initialItem ? initialItem : selectedItem

                    return (
                        <div>
                            <div
                                className="input-prepend"
                                onClick={
                                    disabled
                                        ? null
                                        : () =>
                                              toggleMenu(
                                                  {
                                                      inputValue: '',
                                                  },
                                                  () =>
                                                      textInput.current &&
                                                      textInput.current.focus()
                                              )
                                }
                            >
                                <span className="add-on">
                                    <i className={icon} />
                                </span>
                                <div className="selection-container">
                                    <span className={selectionTextClass}>
                                        {(selectedItem &&
                                            formatter(selectedItem)) ||
                                            placeHolderText}
                                    </span>
                                </div>
                            </div>
                            {isOpen ? (
                                <div className="combobox-dropdown-list">
                                    <label
                                        htmlFor="combobox-input"
                                        className="fa fa-search  combobox-input-icon"
                                    />
                                    <input
                                        type="text"
                                        ref={textInput}
                                        {...getInputProps({
                                            onChange: e => {
                                                onStateChange(
                                                    (e.target as any).value
                                                )
                                            },
                                        })}
                                        className="combobox-input"
                                    />
                                    <ul
                                        className="combobox-list"
                                        {...getMenuProps()}
                                    >
                                        {isOpen &&
                                            data &&
                                            renderSingleItems(
                                                data,
                                                filter,
                                                inputValue,
                                                displayNameGetter,
                                                getItemProps,
                                                highlightedIndex,
                                                selectedItem
                                            )}
                                    </ul>
                                </div>
                            ) : null}
                        </div>
                    )
                }}
            </Downshift>
        </div>
    )
}

function ComboBox<T>({
    data,
    onItemSelected,
    inputValue,
    uniqueIdentifier,
    ...props
}: ComboBoxProps<T>) {
    const [state, setState] = useState({
        inputValue: inputValue,
        selectedItem: null,
    })

    const onStateChange = (
        changes: StateChangeOptions<T>,
        downshiftState: DownshiftState<T>
    ) => {
        //Only change the state and trigger the onItemSelected if you click/hit enter on item
        // Also no point triggering event if nothing has changed.
        if (
            (changes.type === '__autocomplete_click_item__' ||
                changes.type === '__autocomplete_keydown_enter__') &&
            downshiftState.selectedItem &&
            uniqueIdentifier(downshiftState.selectedItem) !==
                (state.selectedItem && uniqueIdentifier(state.selectedItem))
        ) {
            // The changes doesn't always contain the selected Item.
            setState({
                inputValue: changes.inputValue,
                selectedItem:
                    changes.selectedItem || downshiftState.selectedItem,
            })

            onItemSelected(changes.selectedItem || downshiftState.selectedItem)
        }
    }

    useEffect(() => {
        setState({
            inputValue: inputValue,
            selectedItem: null,
        })
    }, [inputValue])

    return (
        <>
            {data && data.length === 0 ? null : (
                <DownShiftComboBox
                    data={data}
                    onStateChange={onStateChange}
                    inputValue={state.inputValue}
                    selectedItem={state.selectedItem}
                    uniqueIdentifier={uniqueIdentifier}
                    {...props}
                />
            )}
        </>
    )
}

export default ComboBox
