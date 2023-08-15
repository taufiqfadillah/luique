import React from 'react';
import Link from 'next/link';
import Layout from '../src/layouts/Layout';
const BlogSingle = ({ blog }) => {
  return (
    <Layout>
      {/* Section Started Heading */}
      <section className="section section-inner started-heading">
        <div className="container">
          {/* Heading */}
          <div className="m-titles align-center">
            <div className="m-category scrolla-element-anim-1 scroll-animate" data-animate="active">
              {blog.category.map((category, index) => (
                <React.Fragment key={index}>
                  {index > 0 && ' || '} {/* Menambahkan tanda | sebelum kategori kedua dan seterusnya */}
                  <Link legacyBehavior href={`/category/${category}`} key={index}>
                    <a>{category}</a>
                  </Link>
                </React.Fragment>
              ))}
              , {new Date(blog.date).toLocaleDateString()} / by {blog.author}
            </div>
            <h1 className="m-title scrolla-element-anim-1 scroll-animate" data-animate="active">
              {blog.title}
            </h1>
          </div>
        </div>
      </section>
      {/* Single Post Image */}
      <div className="section section-inner m-image-large">
        <div className="container">
          <div className="v-line-right v-line-top">
            <div className="v-line-block">
              <span />
            </div>
          </div>
        </div>
        <div className="image">
          <div className="img scrolla-element-anim-1 scroll-animate" data-animate="active" style={{ backgroundImage: `url('https://dashboard.taufiqproject.my.id/assets/dashboard/blog/${blog.image}')` }} loading="lazy" />
        </div>
      </div>
      {/* Section - Blog */}
      <section className="section section-inner m-archive">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 offset-1">
              {/* content */}
              <div className="description">
                <div className="post-content scrolla-element-anim-1 scroll-animate" data-animate="active">
                  <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                  <span className="tags-links">
                    <span>Tags:</span>
                    {blog.category.map((tag, index) => (
                      <a href="#" key={index}>
                        {tag}
                      </a>
                    ))}
                  </span>
                </div>
              </div>
              {/* Comments */}
              <div className="comments-post scrolla-element-anim-1 scroll-animate" data-animate="active">
                <div className="section__comments">
                  <div className="m-titles">
                    <div className="m-title align-left">1 Comments</div>
                  </div>
                  <ul className="comments">
                    <li className="comment comment-item">
                      <div className="comment comment-box">
                        <img src="assets/images/avatar.png" className="avatar" alt="" />
                        <div className="comment-box__body">
                          <div className="content-caption post-content description">
                            <h5 className="comment-box__details">
                              Robert Brown <span>December 9, 2021</span>
                            </h5>
                            <p>
                              Nam dui mauris, congue vel nisi in, tempus gravida enim. Nulla et tristique orci. Pellentesque lectus sapien, maximus id gravida sit amet, tristique non eros. Etiam aliquet, sem vitae sagittis convallis, ante
                              sapien tincidunt nisl, eget dapibus tortor velit quis ex.
                            </p>
                          </div>
                        </div>
                        <div className="comment-footer">
                          <a className="comment-reply-link" href="#">
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="form-comment">
                    <div className="comment-respond">
                      <div className="m-titles">
                        <div className="m-title align-left">Leave a comment</div>
                      </div>
                      <form onSubmit={(e) => e.preventDefault()} className="comment-form">
                        <div className="group-row">
                          <div className="group">
                            <textarea className="textarea" name="comment" rows={3} placeholder="Comment" defaultValue={''} />
                          </div>
                        </div>
                        <div className="group-row">
                          <div className="group">
                            <input type="text" name="author" className="input" placeholder="Name" />
                          </div>
                          <div className="group">
                            <input type="text" name="email" className="input" placeholder="Email" />
                          </div>
                        </div>
                        <div className="group-row">
                          <div className="group">
                            <button type="submit" name="submit" className="btn">
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
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
      </section>
      {/* Section Navigation */}
      <div className="section section-inner m-page-navigation">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 offset-1">
              <div className="h-titles h-navs">
                <Link legacyBehavior href="/blog-single">
                  <a>
                    <span className="nav-arrow splitting-text-anim-1 scroll-animate" data-splitting="chars" data-animate="active">
                      Next Article
                    </span>
                    <span className="h-title splitting-text-anim-2 scroll-animate" data-splitting="chars" data-animate="active">
                      Follow Your Own Design Process
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export async function getServerSideProps(context) {
  const { slug } = context.query;
  try {
    const response = await fetch(`https://dashboard.taufiqproject.my.id/blogs?slug=${slug}`);
    const blog = await response.json();

    return {
      props: {
        blog: blog[0],
      },
    };
  } catch (error) {
    console.error('Error fetching blog:', error);
    return {
      props: {
        blog: null,
      },
    };
  }
}

export default BlogSingle;
