import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Button } from 'element-react'

import * as styles from './index.css'

interface Props {
    userStore?: Store.IUserStore
}

function Login(props: Props) {
    const { userStore } = props
    return (
        <div className={styles.test}>
            {process.env.APP_ENV}
            ... Login !!!...
            <div>
                <Button type="primary" onClick={userStore.login}>
                    成功!
                </Button>
                <Button type="danger" onClick={userStore.getError}>
                    失败
                </Button>
            </div>
        </div>
    )
}

export default inject('userStore')(observer(Login))
