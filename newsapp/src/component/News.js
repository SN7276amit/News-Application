import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({ country='in',pageSize=6, category='general',apiKey,setProgress}) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const capitaliseFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const updateNews = async () => {
        setProgress(10);
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=1&pageSize=${pageSize}`)
        setProgress(30);
        setLoading(true)
        let parsedData = await data.json()
        setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        setProgress(100);
    }
    useEffect(() => {
        document.title = `NewsApp-${capitaliseFirstLetter(category)}`
        updateNews();
    }, [])
    const fetchMoreData = async () => {
        setPage(page + 1)
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page + 1}&pageSize=${pageSize}`)
        setPage(page + 1)
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };
    return (
        <div className='container my-3' >
            <h1 align="center" style={{ margin: '30px 0px', marginTop: '90px' }}> News-Top {capitaliseFirstLetter(category)} Headlines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element, index) => {
                            return <div className="col-md-4" key={`${element.url}-${index}`}>
                                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        }
                        )}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    )
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default News