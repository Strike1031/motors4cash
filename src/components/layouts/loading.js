import { Container, Modal } from 'react-bootstrap'
import { CirclesWithBar } from 'react-loader-spinner'
export const Loading = () => {
    return (
        <Modal show="true" aria-labelledby="contained-modal-title-vcenter" centered className='bg-white preloader-modal'>
            <Container className='d-flex justify-content-center bg-transparent'>
                <CirclesWithBar
                    height="100"
                    width="100"
                    color="#FFC000"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    outerCircleColor=""
                    innerCircleColor=""
                    barColor=""
                    ariaLabel='circles-with-bar-loading'
                />
            </Container>
        </Modal>
    )
}