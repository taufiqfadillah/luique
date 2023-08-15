import Link from 'next/link';
import Layout from '../src/layouts/Layout';
import React, { useState, useEffect } from 'react';

const Blog = ({ blogs }) => {
  const blogsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  return (
    <Layout>
      {/* Section Started Heading */}
      <section className="section section-inner started-heading">
        <div className="container">
          {/* Heading */}
          <div className="m-titles align-center">
            <h1 className="m-title splitting-text-anim-1 scroll-animate" data-splitting="words" data-animate="active">
              <span> Our Blogs </span>
            </h1>
            <div className="m-subtitle splitting-text-anim-1 scroll-animate" data-splitting="words" data-animate="active">
              <span> Recent Articles </span>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Blog */}
      <div className="section section-inner m-archive">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              {/* Blog Items */}
              <div className="articles-container">
                {currentBlogs.map((blog) => (
                  <div key={blog._id} className="archive-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                    <div className="image">
                      <Link href={`/blog-single?slug=${blog.slug}`} passHref key={blog._id}>
                        <div>
                          {' '}
                          <img src={`https://dashboard.taufiqproject.my.id/assets/dashboard/blog/${blog.image}`} alt={blog.title} loading="lazy" />
                        </div>
                      </Link>
                    </div>
                    <div className="desc">
                      <div className="category lui-subtitle">
                        <span>{new Date(blog.date).toDateString()}</span>
                      </div>
                      <h5 className="lui-title">
                        <Link href={`/blog-single?slug=${blog.slug}`} passHref>
                          <div>{blog.title}</div>
                        </Link>
                      </h5>
                      <div className="lui-text" dangerouslySetInnerHTML={{ __html: truncateContent(blog.content, 500) }} />
                      <div className="readmore">
                        <Link href={`/blog-single?slug=${blog.slug}`} passHref>
                          <div className="lnk">Read more</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pager">
                {Array.from({ length: Math.ceil(blogs.length / blogsPerPage) }, (_, index) => (
                  <a key={index} className={`page-numbers ${currentPage === index + 1 ? 'current' : ''}`} onClick={() => handlePageChange(index + 1)}>
                    {index + 1}
                  </a>
                ))}
                {currentPage < Math.ceil(blogs.length / blogsPerPage) && <a className="next page-numbers" onClick={() => handlePageChange(currentPage + 1)}></a>}
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              {/* sidebar */}
              <div className="col__sedebar scrolla-element-anim-1 scroll-animate" data-animate="active">
                <div className="content-sidebar">
                  <aside className="widget-area">
                    <div className="widget widget_block widget_search">
                      <form onSubmit={(e) => e.preventDefault()} className="wp-block-search">
                        <div className="wp-block-search__inside-wrapper">
                          <input type="search" className="wp-block-search__input wp-block-search__input" defaultValue="" />
                          <button type="submit" className="wp-block-search__button wp-element-button">
                            Search
                          </button>
                        </div>
                      </form>
                    </div>
                    <section className="widget widget_block">
                      <div className="wp-block-group">
                        <div className="wp-block-group__inner-container">
                          <h2>Recent Posts</h2>
                          <ul className="wp-block-latest-posts__list wp-block-latest-posts">
                            {blogs.slice(0, 4).map((blog) => (
                              <li key={blog._id}>
                                <Link href={`/blog-single/${blog.slug}`}>
                                  <div className="wp-block-latest-posts__post-title">{blog.title}</div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </section>
                    <section className="widget widget_block">
                      <div className="wp-block-group">
                        <div className="wp-block-group__inner-container">
                          <h2>Archives</h2>
                          <ul className="wp-block-archives-list wp-block-archives">
                            {Array.from(new Set(blogs.map((blog) => new Date(blog.date).getFullYear()))).map((year) => (
                              <li key={year}>
                                <Link href={`/archive/${year}`}>
                                  <div>{year}</div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </section>
                    <section className="widget widget_block">
                      <div className="is-layout-flow wp-block-group">
                        <div className="wp-block-group__inner-container">
                          <h2>Categories</h2>
                          <ul className="wp-block-categories-list wp-block-categories">
                            {Array.from(new Set(blogs.flatMap((blog) => blog.category))).map((category) => (
                              <li key={category}>
                                <Link href={`/category/${category}`}>
                                  <div>{category}</div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </section>
                  </aside>
                </div>
              </div>
            </div>
          </div>
          <div className="v-line-left v-line-top">
            <div className="v-line-block">
              <span />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const truncateContent = (content, maxLength) => {
  if (content.length <= maxLength) {
    return content;
  }
  const lastSpaceIndex = content.lastIndexOf(' ', maxLength);
  return `${content.substring(0, lastSpaceIndex)}...`;
};

export async function getStaticProps() {
  try {
    const response = await fetch('https://dashboard.taufiqproject.my.id/blogs');
    const blogs = await response.json();

    return {
      props: {
        blogs,
      },
    };
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return {
      props: {
        blogs: [],
      },
    };
  }
}
export default Blog;
