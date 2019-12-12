import React from 'React'
import { Modal } from 'antd'

class PortfolioModal extends React.Component {
    state = { visible: false }

    showModal = () => {
        this.setState({
            visible: true,
        })
    }

    handleOk = (e: any) => {
        console.log(e)
        this.setState({
            visible: false,
        })
    }

    handleCancel = (e: any) => {
        console.log(e)
        this.setState({
            visible: false,
        })
    }

    render() {
        return (
            <div>
                <div onClick={this.showModal}>Portfolio: Test 10 (T10)</div>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>
                        Portfolio A <i className="material-icons">home</i>
                    </p>
                    <p>Portfolio B</p>
                    <p>Portfolio C</p>
                </Modal>
            </div>
        )
    }
}

export default PortfolioModal
