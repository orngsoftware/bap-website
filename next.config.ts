import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cgayxjivxutqczuabpmj.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/bap-supabase-s3/**',
        search: '',
      },
    ],
  },
}
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);