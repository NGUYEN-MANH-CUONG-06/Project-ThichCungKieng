# Project-ThichCungKieng

## Mô tả dự án

## 🚀 Live Demo
https://project-thich-cung-kieng.vercel.app 

Đây là một dự án React học tập và phát triển ứng dụng web hiện đại, sử dụng các công nghệ tiên tiến như React 19, TypeScript, Vite, Tailwind CSS, và Zustand. Dự án tập trung vào việc xây dựng một ứng dụng quản lý người dùng, xác thực, và các tính năng liên quan đến "rituals" (có thể là nghi thức hoặc thói quen).

## Tính năng chính

- **Xác thực người dùng (Authentication)**: Đăng nhập, đăng ký, quản lý phiên làm việc.
- **Dashboard**: Bảng điều khiển chính với các thống kê và quản lý.
- **Landing Page**: Trang giới thiệu và quảng bá.
- **Quản lý Rituals**: Tính năng quản lý các nghi thức hoặc thói quen cá nhân.
- **Quản lý Người dùng**: CRUD operations cho người dùng.
- **Giao diện người dùng**: Sử dụng Radix UI và Tailwind CSS để tạo giao diện hiện đại, responsive.
- **Trạng thái toàn cục**: Zustand cho quản lý state, TanStack Query cho API calls.

## Công nghệ sử dụng

- **Frontend Framework**: React 19 với TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4, Radix UI components
- **State Management**: Zustand với persist middleware
- **API Client**: Axios, TanStack React Query
- **Form Handling**: React Hook Form với Zod validation
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Development**: ESLint, TypeScript

## Cấu trúc dự án

```
src/
├── app/
│   ├── App.tsx          # Root component
│   ├── router.tsx       # Routing configuration
│   ├── store.ts         # Zustand stores
│   └── providers/       # Context providers
├── assets/              # Static assets
├── features/            # Feature-based modules
│   ├── auth/            # Authentication features
│   ├── dashboard/       # Dashboard features
│   ├── landing/         # Landing page
│   ├── rituals/         # Rituals management
│   └── users/           # User management
├── lib/                 # Utilities and configurations
│   ├── axios.ts         # HTTP client setup
│   ├── env.ts           # Environment variables
│   ├── queryClient.ts   # React Query setup
│   └── utils.ts         # Utility functions
├── shared/              # Shared components and logic
│   ├── components/      # Reusable UI components
│   ├── constants/       # Constants
│   ├── hooks/           # Custom hooks
│   ├── layouts/         # Layout components
│   ├── pages/           # Page components
│   ├── services/        # API services
│   └── types/           # TypeScript types
└── styles/              # Global styles
```

## Cài đặt và chạy

### Yêu cầu hệ thống

- Node.js >= 18
- npm hoặc yarn

### Cài đặt dependencies

```bash
npm install
```

### Chạy development server

```bash
npm run dev
```

Ứng dụng sẽ chạy tại `http://localhost:5173`

### Build cho production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint code

```bash
npm run lint
```

## Scripts

- `dev`: Chạy development server
- `build`: Build ứng dụng cho production
- `lint`: Kiểm tra linting
- `preview`: Preview production build

## Đóng góp

1. Fork dự án
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## Giấy phép

Dự án này được phân phối dưới giấy phép MIT. Xem file `LICENSE` để biết thêm chi tiết.

## Liên hệ

- Tác giả: NGUYEN MANH CUONG
- Repository: [Project-ThichCungKieng](https://github.com/NGUYEN-MANH-CUONG-06/Project-ThichCungKieng)
