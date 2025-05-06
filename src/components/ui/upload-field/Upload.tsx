import { SERVER_URL } from "@/constants/main.constants";
import { UploadCloud } from "lucide-react";
import { CSSProperties, FC, useRef } from "react";
import { FieldError } from "react-hook-form";
import Skeleton from "react-loading-skeleton";
import { useUpload } from "./useUpload";

interface IUpload {
  folder?: string;
  value?: string;
  onChange: (...event: any[]) => void;
  placeholder: string;
  error?: FieldError;
  style?: CSSProperties;
  isNoImage?: boolean;
}

const Upload: FC<IUpload> = ({
  onChange,
  placeholder,
  error,
  folder,
  isNoImage = false,
  style,
  value,
}) => {
  const { isLoading, uploadFile } = useUpload(onChange, folder);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => inputRef.current?.click();

  return (
    <div style={style}>
      {!isNoImage && (
        <div>
          {isLoading ? (
            <Skeleton count={1} className="w-[100px] h-[100px]" />
          ) : (
            value && (
              <img
                alt=""
                className="rounded-md mb-5"
                src={value.includes("http") ? value : SERVER_URL + value}
                width={100}
                height={100}
              />
            )
          )}

          <div
            onClick={handleClick}
            className="bg-black border border-white min-w-full h-40 flex items-center justify-center cursor-pointer"
          >
            <div className="rounded-full border border-white p-4">
              <UploadCloud className="text-white w-8 h-8" />
            </div>
            <input
              ref={inputRef}
              type="file"
              onChange={uploadFile}
              className="hidden"
            />
          </div>

          {error && <div className="text-red mt-2">{error.message}</div>}
        </div>
      )}
    </div>
  );
};

export default Upload;
