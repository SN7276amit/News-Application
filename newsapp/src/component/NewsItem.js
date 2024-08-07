import React from 'react'

const NewsItem =(props)=> {
    let { title, description, imageUrl, newsUrl, author, date,source } =props
    return (
      <div className='my-3'>
        <div className="card">
        <span className=" badge rounded-pill bg-danger" style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
              {source}
            </span>
          <img src={imageUrl ? imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR38X3KCocZmK1kb404S34laKvW07ODW-rPfA&s"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"} On {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem