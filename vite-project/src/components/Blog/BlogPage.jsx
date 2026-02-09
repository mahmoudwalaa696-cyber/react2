import { Link } from 'react-router-dom';
import { Blog1, Blog2, Blog3, Blog4, Blog5, Blog6, Blog7 } from "../../assets";

// مصفوفة المقالات
const blogs = [
  { id: 1, img: Blog1, title: "The Cotton-Jersey Zip-UP Hoodie", date: "13/01" },
  { id: 2, img: Blog2, title: "The Cotton-Jersey Zip-UP Hoodie", date: "13/01" },
  { id: 3, img: Blog3, title: "The Cotton-Jersey Zip-UP Hoodie", date: "13/01" },
  { id: 4, img: Blog4, title: "The Cotton-Jersey Zip-UP Hoodie", date: "13/01" },
  { id: 5, img: Blog5, title: "The Cotton-Jersey Zip-UP Hoodie", date: "13/01" },
  { id: 6, img: Blog6, title: "The Cotton-Jersey Zip-UP Hoodie", date: "13/01" },
  { id: 7, img: Blog7, title: "The Cotton-Jersey Zip-UP Hoodie", date: "13/01" }
];
const BlogPage = () => {
  return (
    <div>
       <section id="blog">
        {blogs.map((blog) => (
          <div className="blog-box" key={blog.id}>
            <div className="blog-imag">
              <img src={blog.img} alt={blog.title} />
            </div>
            <div className="blog-details">
              <h4>{blog.title}</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores.
              </p>
              <Link to="#">CONTINUE READING</Link>
            </div>
            <h1>{blog.date}</h1>
          </div>
        ))}
      </section>
    </div>
  )
}

export default BlogPage
