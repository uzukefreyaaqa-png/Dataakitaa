"use client"

import { useState } from "react"
import { PanelLeftIcon, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface ModernSidebarProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

export function ModernSidebar({
  open,
  onOpenChange,
  children,
  className,
}: ModernSidebarProps) {
  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md transition-opacity duration-200 lg:hidden"
          onClick={() => onOpenChange(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-card via-background to-background border-r border-border/40 shadow-lg transition-all duration-300 ease-out lg:relative lg:translate-x-0 lg:shadow-none",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          className
        )}
      >
        <div className="flex h-full flex-col gap-0 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between gap-2 border-b border-border/30 bg-gradient-to-r from-primary/10 via-transparent to-transparent px-4 py-4 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-md">
                <PanelLeftIcon className="size-4 text-primary-foreground" />
              </div>
              <h2 className="text-sm font-bold text-foreground tracking-tight">Navigation</h2>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 lg:hidden"
              onClick={() => onOpenChange(false)}
            >
              <X className="size-4" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden">
            <div className="p-3 space-y-1">
              {children}
            </div>
          </div>

          {/* Footer gradient */}
          <div className="h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
          <div className="h-2 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
      </aside>

      {/* Mobile toggle button */}
      {!open && (
        <Button
          variant="ghost"
          size="icon"
          className="fixed bottom-6 left-6 z-40 h-10 w-10 rounded-full shadow-lg lg:hidden bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={() => onOpenChange(true)}
        >
          <PanelLeftIcon className="size-5" />
        </Button>
      )}
    </>
  )
}

interface ModernSidebarItemProps {
  icon: React.ElementType
  label: string
  isActive?: boolean
  onClick?: () => void
  badge?: React.ReactNode
  className?: string
}

export function ModernSidebarItem({
  icon: Icon,
  label,
  isActive = false,
  onClick,
  badge,
  className,
}: ModernSidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-left group",
        isActive
          ? "bg-primary/15 text-primary shadow-sm border border-primary/20"
          : "text-foreground/70 hover:text-foreground hover:bg-muted/60 border border-transparent hover:border-border/50",
        className
      )}
    >
      <div className={cn(
        "shrink-0 w-5 h-5 rounded-md flex items-center justify-center transition-all duration-200",
        isActive
          ? "bg-primary text-primary-foreground"
          : "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
      )}>
        <Icon className="size-4" />
      </div>
      
      <p className="text-sm font-medium leading-none truncate">{label}</p>

      {badge && (
        <div className="shrink-0">
          {typeof badge === "string" ? (
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary text-[10px] font-bold">
              {badge}
            </span>
          ) : (
            badge
          )}
        </div>
      )}
    </button>
  )
}

interface ModernSidebarSectionProps {
  title?: string
  children: React.ReactNode
  className?: string
}

export function ModernSidebarSection({
  title,
  children,
  className,
}: ModernSidebarSectionProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {title && (
        <p className="px-3 py-2 text-[11px] font-bold uppercase tracking-widest text-muted-foreground/70">
          {title}
        </p>
      )}
      <div className="space-y-1">
        {children}
      </div>
    </div>
  )
}
