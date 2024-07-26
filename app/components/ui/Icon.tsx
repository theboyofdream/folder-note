import {
  ArrowLeft,
  ChevronDown,
  ChevronLeft,
  File,
  FileCheck,
  FilePlus,
  FileText,
  Filter,
  Folder,
  FolderCheck,
  FolderPlus,
  FolderUp,
  ListFilter,
  LucideProps,
  Minus,
  Pen,
  PenLine,
  Plus,
  QrCode,
  Save,
  Search,
  Settings,
  Settings2,
  SwatchBook,
  Trash,
  Trash2,
  CircleX,
  X,
  Check,
  CircleCheck
} from 'lucide-react-native';
import React from "react";


const ICONS = {
  X,
  Check,
  CircleCheck,
  ArrowLeft: ArrowLeft,
  ChevronDown: ChevronDown,
  ChevronLeft: ChevronLeft,
  CircleX:CircleX,
  File: File,
  FileCheck: FileCheck,
  FilePlus: FilePlus,
  FileText: FileText,
  Filter: Filter,
  Folder: Folder,
  FolderCheck: FolderCheck,
  FolderPlus: FolderPlus,
  FolderUp: FolderUp,
  ListFilter: ListFilter,
  Minus: Minus,
  PenLine: PenLine,
  Pen: Pen,
  Plus: Plus,
  QrCode: QrCode,
  Save: Save,
  Search: Search,
  Settings: Settings,
  Settings2: Settings2,
  SwatchBook: SwatchBook,
  Trash: Trash,
  Trash2: Trash2
} as const

type IconProps = LucideProps & {
  name: keyof typeof ICONS
}

export const Icon: React.FC<IconProps> = function ({ size, strokeWidth, color, ...props }) {
  const Component = ICONS[props.name]
  return (
    <Component
      {...props}
      size={size ?? 24}
      strokeWidth={strokeWidth ?? 1.5}
      color={color ?? 'black'}
    />
  )
}