# Adventore Tech Blog

Welcome to the Adventore Tech Blog, a modern and dynamic blog built with [Prismic][prismic] and [Next.js][nextjs]. This project showcases our tech insights, tutorials, and industry updates in an engaging and user-friendly format.

## 🚀 Quick Start

To run this project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/adventore-tech-blog.git
   cd adventore-tech-blog
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up your Prismic repository:
   - If you haven't already, create a Prismic account and a new repository for this project.
   - Configure your `.env.local` file with your Prismic API endpoint.

4. Run the development server:
   ```sh
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the blog.

## 📝 Content Management

This blog uses Prismic as its content management system. To add or edit content:

1. Go to your Prismic dashboard.
2. Create new blog posts, edit existing ones, or modify page content.
3. Use the preview feature to see changes before publishing.

## 🛠 Customization

The Adventore Tech Blog is built to be easily customizable:

- `src/components/`: Contains reusable components like `PostCard` and `RichText`.
- `src/app/`: Includes the main page layouts and routing logic.
- `slices/`: Custom Slice components for flexible content structuring.

Feel free to modify these components and add new features to suit your needs.

## 🚀 Deployment

To deploy your Adventore Tech Blog:

1. Push your changes to your GitHub repository.
2. Set up a new project on a hosting platform like Vercel or Netlify.
3. Connect your GitHub repository to the hosting platform.
4. Configure your environment variables (e.g., Prismic API endpoint).
5. Deploy!

## 📚 Learn More

- [Prismic Next.js Documentation][prismic-docs]
- [Next.js Documentation](https://nextjs.org/docs)

## License

This project is open source and available under the [MIT License](LICENSE).

[prismic]: https://prismic.io/
[prismic-docs]: https://prismic.io/docs/technologies/nextjs
[nextjs]: https://nextjs.org/
