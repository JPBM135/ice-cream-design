export function createStorageBucketUrl(path: string) {
	return `${process.env.NEXT_PUBLIC_ORACLE_SIGN_STORAGE_BUCKET}${process.env.NEXT_PUBLIC_ORACLE_STORAGE_BUCKET_ICE_CREAM_PREFIX}${path}`;
}
