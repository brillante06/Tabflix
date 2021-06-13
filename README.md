# Tabflix


[페이지](https://tab-flix.vercel.app/)
<br/><br/>
## 프로젝트 소개

TMDB(The Movie Database) API를 사용하여 영화 검색 및 상세정보를 보여주는 웹페이지입니다.   
Netflix의 메인 화면을 바탕으로 만들었습니다.
<br/><br/>


## 주요기능

### IntersectionObserver를 활용한 Custom hook
React에서 custom hook으로 등록해 놓은 뒤 callback 함수에 따라 다양한 action을 취할 수 있습니다.
```
const useIntersecting = (
    ref: React.RefObject<HTMLDivElement>,//target이 될 element
    onIntersect: IntersectionObserverCallback //특정 action을 취할 callback 함수
) => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    };

    useEffect(() => {
        const io = new IntersectionObserver(onIntersect, options);

        if (ref.current) {
            io.observe(ref.current);
        }
        return () => {
           io.disconnect();
        };
    }, [ref, onIntersect]);
};
```
custom hook에서는 target이 될 element와 action을 취할 수 있는 callback 함수를 인자로 받습니다. 
필요한 경우에는 option 객체도 매개변수로 받아 사용할 수 있습니다.

`useEffect` 안에서는 callback함수와 option을 매개변수로 하는 인스턴스를 생성하고 element를 관찰합니다.
return시에는 cleanup함수를 사용해서 관찰을 중지합니다.

<br>

### lazy loading 예시

```
const lazyLoading: IntersectionObserverCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting)
                return;
            const lazyimage = entry.target as HTMLImageElement;
            observer.unobserve(entry.target);
            if (lazyimage.dataset.src) lazyimage.src = lazyimage.dataset.src; 
            // entry가 교차지점에 올경우 data-src를 src로 교체해준다.
        });
    };
```

<br/><br/>
## 기술

- React-Testing-Library
- Typescript
- React
- styled-components
- useSWR












