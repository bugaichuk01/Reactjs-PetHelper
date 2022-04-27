const checkStatus = (status, lost, found) => {
    return  status === 'Потерян' ? `${lost}` : `${found}`
}

export default checkStatus;