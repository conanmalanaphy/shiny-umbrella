import React from 'React'
import Modal from 'antd/lib/modal'
import 'antd/lib/modal/style/index.css'

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
                    <p>portfolio A</p>
                    <p>Portfolio B</p>
                    <p>Portfolio C</p>
                </Modal>
            </div>
        )
    }
}

export default PortfolioModal
