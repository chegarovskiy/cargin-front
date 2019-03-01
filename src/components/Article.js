import React, {Component} from 'react'
import { Button } from 'reactstrap';

class Article extends Component {

    state = {
        isOpen: true
    }


    render() {
        const {article} = this.props
        console.log('---', this.props)
        const body = this.state.isOpen && <section>{article.text}</section>
        return (
            <div>
                <h2>{article.title}
                    <Button color="danger" onClick={this.handleClick}>close</Button>
                </h2>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }


    handleClick = () => {
        console.log('---', 'clicked')
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
export default Article