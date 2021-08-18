import { works } from '../assets/works'

export const useWork = (url) => {
    const work = works.find(eachWork => (eachWork.url === url))
    return work
}
